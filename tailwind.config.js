/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				grifter: ['Grifter Bold']
			},
			backgroundImage: {
				team: "url('$lib/assets/team.png')",
				valdi: "url('$lib/assets/Valdi.webp')",
				andre: "url('$lib/assets/Andre.webp')"
			},

			colors: {
				move: '#FFF200'
			},
			animation: {
				float: 'float 3s ease-in-out infinite'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(20px) ' },
					'50%': { transform: 'translateY(-20px)' }
				}
			}
		}
	},
	plugins: []
};
