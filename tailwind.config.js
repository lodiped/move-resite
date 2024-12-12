import formsPlugin from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				grifter: ['Grifter Bold'],
				montserrat: ['Montserrat'],
				cofo: [
					'cofo-peshka-variable',
					{
						fontVariationSettings: '"slnt" -14, "wdth" 50, "wght" 564'
					}
				]
			},
			backgroundImage: {
				team: "url('$lib/assets/team.png')",
				valdi: "url('$lib/assets/Valdi.webp')",
				andre: "url('$lib/assets/Andre.webp')"
			},

			colors: {
				move: '#FFF200',
				nej: '#66D866',
				nejblack: '#2a2c2e',
				nejwhite: '#ebebeb'
			},
			animation: {
				float: 'float 2s ease-in-out infinite',
				'spin-slow': 'spin 6s linear infinite',
				'spin-reverse': 'spinreverse 30s linear infinite'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(5px)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				spinreverse: {
					'0%': { transform: 'rotate(0deg)' },
					'50%': { transform: 'rotate(-180deg)' },
					'100%': { transform: 'rotate(-360deg)' }
				}
			}
		}
	},
	plugins: [formsPlugin]
};
