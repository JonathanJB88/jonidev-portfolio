module.exports = {
  plugins: ['tailwindcss', process.env.NODE_ENV === 'production' ? 'cssnano' : null, 'autoprefixer'].filter(Boolean),
};
