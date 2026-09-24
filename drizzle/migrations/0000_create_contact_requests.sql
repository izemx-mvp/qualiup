CREATE TABLE public.contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tracking_code TEXT NOT NULL UNIQUE CHECK (tracking_code ~ '^QU-[0-9A-Z]{4}$'),
  full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  company TEXT CHECK (company IS NULL OR char_length(company) <= 150),
  email TEXT NOT NULL CHECK (char_length(email) <= 255),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 6 AND 30),
  sector TEXT NOT NULL CHECK (char_length(sector) <= 80),
  request_type TEXT NOT NULL CHECK (char_length(request_type) <= 80),
  nearest_agency TEXT CHECK (nearest_agency IS NULL OR char_length(nearest_agency) <= 40),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000),
  consent_accepted BOOLEAN NOT NULL CHECK (consent_accepted = TRUE),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_requests TO service_role;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_requests_created_at_idx ON public.contact_requests (created_at DESC);