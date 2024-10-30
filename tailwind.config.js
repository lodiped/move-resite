/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				grifter: ['Grifter Bold']
			},
			backgroundImage: {
				team: "url('$lib/assets/team.png')"
			}
		}
	},
	plugins: []
};
