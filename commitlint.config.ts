import type {UserConfig} from '@commitlint/types';

const Configuration: UserConfig = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    "header-max-length": [2, "always", 64],
    "header-min-length": [2, "always", 3],
    'type-enum': [
      2, 
      'always', 
      [
        'test', 
        'feat', 
        'fix', 
        'chore', 
        'docs', 
        'refactor', 
        'style', 
        'ci', 
        'perf', 
        'config',
        'format'
      ]
    ]
  },
}

module.exports = Configuration;