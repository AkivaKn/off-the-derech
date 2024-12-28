import emailjs from '@emailjs/browser'
export default async function submitContactForm(formData) {
    await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        {
            publicKey:
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
    )
}