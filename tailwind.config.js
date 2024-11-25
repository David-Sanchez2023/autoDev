import tailwindcssAnimate from 'tailwindcss-animate';


/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    'node_modules/@ingenieria-digital/medicatel-ui/dist/**/*.{ts,tsx,js,jsx}',
  ],
  prefix: '',
  theme: {
  	container: {
  		center: 'true',
  		padding: {
  			DEFAULT: '1rem',
  			sm: '2rem'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif']
  		},
  		colors: {
  			navy: {
  				'100': '#CCDFE5',
  				'200': '#99BFCB',
  				'300': '#669FB2',
  				'400': '#337F98',
  				'500': '#005F7F'
  			},
  			cyan: {
  				'50': '#EAF6FB',
  				'100': '#CCEFF9',
  				'200': '#99E0F3',
  				'300': '#66D0EE',
  				'400': '#33C1E8',
  				'500': '#00B2E3'
  			},
  			green: {
  				'100': '#F1F5CC',
  				'200': '#E4EB99',
  				'300': '#D6E266',
  				'400': '#C9D833',
  				'500': '#BCCF00'
  			},
  			red: {
  				'50': '#FCE5E9',
  				'100': '#FACCD4',
  				'200': '#F699A9',
  				'300': '#F2667E',
  				'400': '#EE3353',
  				'500': '#EA0029'
  			},
  			yellow: {
  				'500': '#E0C038'
  			},
  			gray: {
  				'100': '#EFEFEF',
  				'200': '#DDDDDD',
  				'300': '#AAAAAA',
  				'400': '#707070',
  				'500': '#3C3C3B'
  			},
  			disabled: {
  				'100': '#F8FBFD',
  				'200': '#ECF6FA',
  				'300': '#D2E4EA',
  				'400': '#B8D0D8'
  			},
  			black: '#121417',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			sm: '0px 3px 6px #D2E4EA',
  			md: '1px 1px 10px #D2E4EA',
  			lg: '5px 5px 20px #D2E4EA',
  			xs: '0px 4px 4px #DDDDDD'
  		},
  		borderRadius: {
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'loader-wave': {
  				'0%, 40%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'20%': {
  					transform: 'translateY(-0.5rem)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
};
