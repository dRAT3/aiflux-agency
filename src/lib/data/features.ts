import type { Feature } from "$lib/utils/types";

export default [ 
  {
    name: 'Custom Tailored Automations',
    description:
      'Every e-commerce business has its own distinct identity, and we honor that. Instead of providing generic, off-the-shelf solutions, we craft custom automations, ensuring they align seamlessly with your specific business needs.',
    image: 'images/features/open-source.jpg',
  }, 
  {
    name: 'Advanced AI Integration',
    description:
      'We harness the power of Large Language Models to supercharge your CRM workflows. Dive into the world of AI-enhanced procedures, where tasks are streamlined, and predictive insights are at your fingertips.',
    image: 'images/features/optimized.jpg',
  }, 
  {
    name: 'Extensible',
    description:
      'Our expertise in the n8n platform is unparalleled. Whether you\'re a Shopify enthusiast, a WooCommerce advocate, a Magento aficionado, or any other platform user, we bridge the communication gaps, ensuring all your tools function harmoniously.',
    image: 'images/features/extensible.jpg',
    tags: [{ label: 'Powered by n8n' }]
  }, 
] as Feature[];
