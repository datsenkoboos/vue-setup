import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  failOnDifference: true,
  generateOnly: true,
  storybookShots: {
    storybookUrl: './storybook-static',
  },
  threshold: 100,
  waitBeforeScreenshot: 5000,
};
