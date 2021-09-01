module.exports = {
    mode: 'jit',

    purge: {
        enabled: false,
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
    },

    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                Graphik: ['graphik', 'sans-serif'],
            },
            fontSize: {
                base: ['13px', '2rem'],
                '3xl': ['2.89rem', '3.2rem'],
                '7xl': ['4.163rem', '4.5rem'],
            },

            gridTemplateColumns: {
                nav: '.2fr 1fr',
            },

            animation: {
                'bounce-slow': 'bounce 7s linear infinite',
                'pulse-slow': 'pulse 7s linear infinite',
            },
        },
    },
    variants: {
        animation: ['responsive', 'motion-safe', 'motion-reduce'],

        extend: {
            boxShadow: ['active'],
        },
    },
    plugins: [],
}
