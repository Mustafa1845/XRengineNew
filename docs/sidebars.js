/**
 * 
 * @author Abhinav Shah
 * @author Hanzla Mateen
 */
module.exports = {
  sidebar: {
    'Getting Started': [
        // 'introduction',
        // 'installation',
        // 'coreconcepts', 
        // 'architecture', 
        // 'contributing',
        {
          type: 'category',
          label: 'Packages',
          collapsed: false,
          items: [
            // {
            //   type: 'category',
            //   label: 'client',
            //   collapsed: true,
            //   items: [{
            //     type: 'autogenerated',
            //     dirName: 'generated/client',
            //   }],
            // },
            // {
            //   type: 'category',
            //   label: 'client-core',
            //   collapsed: true,
            //   items: [{
            //     type: 'autogenerated',
            //     dirName: 'generated/client-core',
            //   }],
            // },
            {
              type: 'category',
              label: 'server',
              collapsed: true,
              items: [{
                type: 'autogenerated',
                dirName: 'generated/server',
              }],
            },
            {
              type: 'category',
              label: 'server-core',
              collapsed: true,
              items: [{
                type: 'autogenerated',
                dirName: 'generated/server-core',
              }],
            },
            {
              type: 'category',
              label: 'common',
              collapsed: true,
              items: [{
                type: 'autogenerated',
                dirName: 'generated/common',
              }],
            },
            {
              type: 'category',
              label: 'engine',
              collapsed: true,
              items: [{
                type: 'autogenerated',
                dirName: 'generated/engine',
              }],
            },
            {
              type: 'category',
              label: 'gameserver',
              collapsed: true,
              items: [{
                type: 'autogenerated',
                dirName: 'generated/gameserver',
              }],
            },
          ],
        },
    ],
  },
};
  
