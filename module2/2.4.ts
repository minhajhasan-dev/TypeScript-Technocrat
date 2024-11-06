{
  // interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type HonorBand = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<HonorBand> = {
    name: "Minhaj",
    computer: {
      brand: "Custom",
      model: "Adijuger PC",
      releaseYear: 2010,
    },
    smartWatch: {
      brand: "Honor",
      model: "band 6",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
    waterProof: boolean;
  }

  interface RoyalEnfield {
    model: string;
    brand: string;
    engine: string;
    releaseYear: number;
  }

  const richDeveloper: Developer<AppleWatch, RoyalEnfield> = {
    name: "Hafsa",
    computer: {
      brand: "HP",
      model: "Core i5 10th Gen",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Xiomi",
      model: "band 6",
      heartTrack: true,
      sleepTrack: true,
      waterProof: true,
    },
    bike: {
      model: "Royal Enfield Classic 350",
      brand: "Royal Enfield",
      engine: "350cc",
      releaseYear: 2021,
    },
  };
  //
}
