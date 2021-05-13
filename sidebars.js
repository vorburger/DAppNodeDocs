
module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Get Started',  // Level 1
      items: [
        {
          type: 'category',
          label: 'Introduction',
          items: [
            {
              type: 'autogenerated',
              dirName: 'get-started/introduction', 
            },
          ],
        },
        {
          type: 'category',
          label: 'Installation',
          items: [
            'get-started/installation/introduction',
              {
                type: 'category',
                label: 'DAppNode Hardware',
                items: [
                  {
                    type: 'autogenerated',
                    dirName: 'get-started/installation/dappnode-hardware', 
                  },
                ],
              },
              {
                type: 'category',
                label: 'Custom Hardware',
                items: [
                  {
                    type: 'category',
                    label: 'Installation',
                    items: [
                      {
                        type: 'autogenerated',
                        dirName: 'get-started/installation/custom-hardware/installation', 
                      },
                    ],
                  },
                ],
              },
              {
                type: 'category',
                label: 'ARM Hardware',
                items: [
                  {
                    type: 'autogenerated',
                    dirName: 'get-started/installation/arm-hardware', 
                  },
                ],
              },
            
          ],
        },
        
      ],
    },
    {
      type: 'category',
      label: 'User Guide',  // Level 1
      items: [
        'user-guide/overview',
        {
          type: 'category',
          label: 'Access your DAppNode',
          items: [
            {
              type: 'autogenerated',
              dirName: 'user-guide/ui/access', 
            },
          ],
        },
        {
          type: 'category',
          label: 'Initial Configurations',
          items: [
            {
              type: 'autogenerated',
              dirName: 'user-guide/ui/first-steps', 
            },
          ],
        },
        {
          type: 'category',
          label: 'Recommended Set Ups',
          items: [
            {
              type: 'autogenerated',
              dirName: 'user-guide/ui/recommended-set-ups', 
            },
          ],
        },
        'user-guide/ui/dashboard',
        'user-guide/ui/dappstore',
        'user-guide/ui/system',
        'user-guide/ui/support',
        'user-guide/ui/package-management',
        {
          type: 'category',
          label: 'Support',
          items: [
            {
              type: 'autogenerated',
              dirName: 'user-guide/support', 
            },
          ],
        },
      ],
    },
    {
      type: 'category', // Level 1
      label: 'Developers',
      items: [
        'developers/overall',
        {
          type: 'category',
          label: 'Introduction',
          items: [
            {
              type: 'autogenerated',
              dirName: 'developers/introduction', 
            },
          ],
        },
        'developers/dev-support',
      ],
    },
    {
      type: 'category', // Level 1
      label: 'Learn',
      items: [
        'learn/overall',
        {
          type: 'category',
          label: 'Architecture',
          items: [
            {
              type: 'autogenerated',
              dirName: 'learn/architecture', 
            },
          ],
        },
        {
          type: 'category',
          label: 'Network',
          items: [
            {
              type: 'autogenerated',
              dirName: 'learn/network', 
            },
          ],
        },
        {
          type: 'category',
          label: 'Blockchain Environment',
          items: [
            {
              type: 'autogenerated',
              dirName: 'learn/blockchain-environment', 
            },
          ],
        },
        'learn/dappnodesdk',
      ],
    },
  ],
};