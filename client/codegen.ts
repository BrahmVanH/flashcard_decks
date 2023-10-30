// import { CodegenConfig } from '@graphql-codegen/cli';

// const config: CodegenConfig = {
// 	schema: 'http://localhost:3001/graphql',
// 	// this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
// 	documents: ['schemas/*.{graphql}'],
// 	generates: {
// 		'./src/__generated__/': {
// 			preset: 'client',
// 			plugins: [
// 				'typescript',
// 				'typescript-operations',
// 				'typescript-react-apollo',
// 			],
// 			config: {
// 				skipTypename: false,
// 				withHooks: true,
// 				withHOC: false,
// 				withComponent: false,
// 			},
// 			presetConfig: {
// 				gqlTagName: 'gql',
// 			},
// 		},
// 	},
// 	ignoreNoDocuments: true,
// };

// export default config;

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3001/graphql', // The URL of your GraphQL schema
  documents: './schemas/**/*.graphql', // Path to your query documents (in a 'schemas' folder)
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [
        {
          // Generates TypeScript files for your queries
          add: {
            content: `import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';\n`,
          },
        },
        'typescript',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
