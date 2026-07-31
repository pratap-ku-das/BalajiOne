export interface FormSubmitPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message?: string;
  projectType?: string;
  budget?: string;
  topic?: string;
  selectedDate?: string;
  selectedTime?: string;
}

export async function submitWeb3Form(payload: FormSubmitPayload): Promise<boolean> {
  const apiKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string) || 'a50d9e9f-5694-4169-8d13-75122bd4b417';
  
  const bodyData: Record<string, any> = {
    access_key: apiKey,
    subject: payload.subject,
    from_name: 'BalajiOne Enterprises Inquiry',
    name: payload.name,
    email: payload.email,
    replyto: payload.email,
    phone: payload.phone || 'N/A',
    company: payload.company || 'N/A',
    project_type: payload.projectType || payload.topic || 'N/A',
    budget: payload.budget || 'N/A',
    message: payload.message || `Consultation requested for ${payload.topic || 'Software Inquiry'} on ${payload.selectedDate || ''} ${payload.selectedTime || ''}`,
  };

  if (payload.selectedDate) {
    bodyData.consultation_date = `${payload.selectedDate} at ${payload.selectedTime}`;
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(bodyData)
    });

    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error('Web3Forms dispatch error:', err);
    return false;
  }
}
