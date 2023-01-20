import { useCallback, useEffect } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export const ReCaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available')
      return
    }

    const token = await executeRecaptcha('contact')
  }, [executeRecaptcha])

  useEffect(() => {
    handleReCaptchaVerify()
  }, [handleReCaptchaVerify])

  return (
    <button type='submit' onClick={handleReCaptchaVerify}>
      Send
    </button>
  )
}
