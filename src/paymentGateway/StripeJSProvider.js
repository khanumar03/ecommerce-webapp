import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const StripeJSProvider = ({ children }) => {
  const [stripe, setStripe] = useState(false)

  useEffect(() => {
    if (!stripe) {
      setStripe(loadStripe("pk_test_51KKlRiSBvCVcsa1IJXNzXydHpfRED4MSzmjZjwY2hFFWRfco8e9HPG6JJTATTBZpiA2vdCchL5OTjlLUEnzOz7oh00vDjgCS0jpk_test_51KKlRiSBvCVcsa1IJXNzXydHpfRED4MSzmjZjwY2hFFWRfco8e9HPG6JJTATTBZpiA2vdCchL5OTjlLUEnzOz7oh00vDjgCS0j"))
    }
  }, [stripe])

  console.log(stripe)

  return children({ stripe })
}

export default StripeJSProvider