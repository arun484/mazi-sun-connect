-- Create allowed_users table for managing user whitelist
CREATE TABLE public.allowed_users (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  added_by uuid REFERENCES auth.users(id),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.allowed_users ENABLE ROW LEVEL SECURITY;

-- Create policies for allowed_users
CREATE POLICY "Admins can manage allowed users" 
ON public.allowed_users 
FOR ALL 
USING (EXISTS (
  SELECT 1 FROM profiles 
  WHERE profiles.user_id = auth.uid() 
  AND profiles.role = 'admin'
));

-- Add trigger for updated_at
CREATE TRIGGER update_allowed_users_updated_at
BEFORE UPDATE ON public.allowed_users
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some initial allowed users (replace with actual admin emails)
INSERT INTO public.allowed_users (email, added_by) VALUES 
('arun484@gmail.com', NULL),
('admin@mazigreenergy.com', NULL);