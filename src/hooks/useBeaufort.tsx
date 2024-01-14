import { useAppContext } from '.';

const beaufortScales: BeaufortScale[] = [
  {
    number: 0,
    minSpeed: {
      metric: 0,
      imperial: 0,
    },
    description: 'Calm',
    conditions: {
      sea: 'Sea is like a mirror. Smoke rises vertically.',
      land: 'Calm wind. Smoke rises vertically with little if any drift.',
    },
  },
  {
    number: 1,
    minSpeed: {
      metric: 0.3,
      imperial: 1,
    },
    description: 'Light Air',
    conditions: {
      sea: 'Ripples with the appearance of scales are formed, but without foam crests. Smoke drifts from funnel.',
      land: 'Direction of wind shown by smoke drift, not by wind vanes. Little if any movement with flags. Wind barely moves tree leaves.',
    },
  },
  {
    number: 2,
    minSpeed: {
      metric: 1.6,
      imperial: 4,
    },
    description: 'Light Breeze',
    conditions: {
      sea: 'Small wavelets, still short but more pronounced, crests have glassy appearance and do not break. Wind felt on face. Smoke rises at about 80 degrees.',
      land: 'Wind felt on face. Leaves rustle and small twigs move. Ordinary wind vanes move.',
    },
  },
  {
    number: 3,
    minSpeed: {
      metric: 3.4,
      imperial: 8,
    },
    description: 'Gentle Breeze',
    conditions: {
      sea: 'Large wavelets, crests begin to break. Foam of glassy appearance. Perhaps scattered white horses (white caps). Wind extends light flag and pennants. Smoke rises at about 70 deg.',
      land: 'Leaves and small twigs in constant motion. Wind blows up dry leaves from the ground. Flags are extended out.',
    },
  },
  {
    number: 4,
    minSpeed: {
      metric: 5.5,
      imperial: 13,
    },
    description: 'Moderate Breeze',
    conditions: {
      sea: 'Small waves, becoming longer. Fairly frequent white horses (white caps). Wind raises dust and loose paper on deck. Smoke rises at about 50 deg. No noticeable sound in the rigging. Slack halyards curve and sway. Heavy flag flaps limply.',
      land: 'Wind moves small branches. Wind raises dust and loose paper from the ground and drives them along.',
    },
  },
  {
    number: 5,
    minSpeed: {
      metric: 8,
      imperial: 19,
    },
    description: 'Fresh Breeze',
    conditions: {
      sea: "Moderate waves, taking more pronounced long form. Many white horses (white caps) are formed (chance of some spray).\nWind felt strongly on face. Smoke rises at about 30 deg. Slack halyards whip while bending continuously to leeward. Taut halyards maintain slightly bent position. Low whistle in the rigging. Heavy flag doesn't extended but flaps over entire length.",
      land: 'Large branches and small trees in leaf begin to sway. Crested wavelets form on inland lakes and large rivers.',
    },
  },
  {
    number: 6,
    minSpeed: {
      metric: 10.8,
      imperial: 25,
    },
    description: 'Strong Breeze',
    conditions: {
      sea: 'Large waves begin to form. White foam crests are more extensive everywhere (probably some spray).\nWind stings face in temperatures below 35 deg F (2C). Slight effort in maintaining balance against wind. Smoke rises at about 15 deg. Both slack and taut halyards whip slightly in bent position. Low moaning, rather than whistle, in the rigging. Heavy flag extends and flaps more vigorously.',
      land: 'Large branches in continuous motion. Whistling sounds heard in overhead or nearby power and telephone lines. Umbrellas used with difficulty.',
    },
  },
  {
    number: 7,
    minSpeed: {
      metric: 13.9,
      imperial: 32,
    },
    description: 'Near Gale',
    conditions: {
      sea: 'Sea heaps up and white foam from breaking waves begins to be blown in streaks along the direction of wind. Necessary to lean slightly into the wind to maintain balance. Smoke rises at about 5 to 10 deg. Higher pitched moaning and whistling heard from rigging. Halyards still whip slightly. Heavy flag extends fully and flaps only at the end. Oilskins and loose clothing inflate and pull against the body.',
      land: 'Whole trees in motion. Inconvenience felt when walking against the wind.',
    },
  },
  {
    number: 8,
    minSpeed: {
      metric: 17.2,
      imperial: 39,
    },
    description: 'Gale',
    conditions: {
      sea: 'Moderately high waves of greater length. Edges of crests begin to break into the spindrift. The foam is blown in well-marked streaks along the direction of the wind. Head pushed back by the force of the wind if allowed to relax. Oilskins and loose clothing inflate and pull strongly. Halyards rigidly bent. Loud whistle from rigging. Heavy flag straight out and whipping.',
      land: 'Wind breaks twigs and small branches. Wind generally impedes walking.',
    },
  },
  {
    number: 9,
    minSpeed: {
      metric: 20.8,
      imperial: 47,
    },
    description: 'Strong Gale',
    conditions: {
      sea: 'High waves. Dense streaks of foam along direction of wind. Crests of waves begin to topple, tumble and roll over. Spray may affect visibility.',
      land: 'Structural damage occurs, such as chimney covers, roofing tiles blown off, and television antennas damaged. Ground is littered with many small twigs and broken branches.',
    },
  },
  {
    number: 10,
    minSpeed: {
      metric: 24.5,
      imperial: 55,
    },
    description: 'Whole Gale',
    conditions: {
      sea: 'Very high waves with long overhanging crests. The resulting foam, in great patches is blown in dense streaks along the direction of the wind. On the whole, the sea takes on a whitish appearance. Tumbling of the sea becomes heavy and shock-like. Visibility affected.',
      land: 'Considerable structural damage occurs, especially on roofs. Small trees may be blown over and uprooted.',
    },
  },
  {
    number: 11,
    minSpeed: {
      metric: 28.5,
      imperial: 64,
    },
    description: 'Storm Force',
    conditions: {
      sea: 'Exceptionally high waves (small and medium-sized ships might be for time lost to view behind the waves). The sea is completely covered with long white patches of foam lying along the direction of the wind. Everywhere, the edges of the wave crests are blown into froth. Visibility greatly affected.',
      land: 'Widespread damage occurs. Larger trees blown over and uprooted.',
    },
  },
  {
    number: 12,
    minSpeed: {
      metric: 32.7,
      imperial: 73,
    },
    description: 'Hurricane Force',
    conditions: {
      sea: 'The air is filled with foam and spray. The sea is completely white with driving spray. Visibility is seriously affected.',
      land: 'Severe and extensive damage. Roofs can be peeled off. Windows broken. Trees uprooted. RVs and small mobile homes overturned. Moving automobiles can be pushed off the roadways.',
    },
  },
];

export type BeaufortScale = {
  number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  minSpeed: {
    metric: number;
    imperial: number;
  };
  description: string;
  conditions: {
    sea: string;
    land: string;
  };
};

const reversedbeaufortScales = [...beaufortScales].reverse();

const useBeaufort = (windSpeed: number) => {
  const { state } = useAppContext();

  return reversedbeaufortScales.reduce(
    (result: BeaufortScale, detail: BeaufortScale) => {
      if (
        Object.keys(result).length === 0 &&
        Number(detail.minSpeed[state.configs.unit]) <= Number(windSpeed)
      ) {
        return detail;
      }
      return result;
    },
    {} as BeaufortScale
  );
};

export { useBeaufort };
