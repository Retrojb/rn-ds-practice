import { getStorybookUI } from '@storybook/react-native';
import React from 'react';

import './doctools';
import './storybook.requires.js';

const StorybookUIRoot = getStorybookUI({});

export default () => <StorybookUIRoot />;
