import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	basename: '/NeuralForge',
	ssr: false,
	prerender: ['/*?'],
} satisfies Config;
