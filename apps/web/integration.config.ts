interface IntegrationConfig {
  payment?: {
    paypal?: {
      paymentId: number;
      clientId: string;
      merchantId: string;
    };
  };
}

export default {
  payment: {
    paypal: {
      paymentId: 6001,
      clientId: 'ARl3fqscBzWV2tBlUm8bZscYTCKigkQXUoCGWlPNyhcD0FUXaTaigTVRTn2CdkQeojm2g2Ovkvyt82T7',
      merchantId: 'G3B6KHDK6UFM2',
    },
  },
} as IntegrationConfig;
