export type SecurityPolicy = {
    accessKey: string;
    code: string;
    description: string;
    enableAd: boolean;
    passwordQtyDaysExpiration: number;
    passwordContainsNumber: boolean;
    passwordContainsLetterUpperCase: boolean;
    passwordContainsLetterLowerCase: boolean;
    passwordContainsSpecialKey: boolean;
    passwordQtyMinKeys: number;
    passwordQtyOldNotUse: number;
    sessionTimeOut: number;
  };