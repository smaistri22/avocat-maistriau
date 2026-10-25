export const WEB3FORMS_ACCESS_KEY = 'e90b536a-ad18-457d-b907-119ea923bd85';

export interface SendFormResult {
  success: boolean;
  message?: string;
}

export async function sendWeb3Form(payload: Record<string, any>): Promise<SendFormResult> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: 'Site avocat-maistriau.com',
        botcheck: false,
        ...payload,
      }),
    });

    const data = await response.json();
    if (response.ok && data.success) {
      return { success: true };
    }
    return {
      success: false,
      message: data.message || "L'envoi a échoué. Merci de réessayer ou d'écrire directement à p.maistriau@gmail.com.",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "L'envoi a échoué. Merci de réessayer ou d'écrire directement à p.maistriau@gmail.com.",
    };
  }
}
