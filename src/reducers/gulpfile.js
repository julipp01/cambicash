var gulp = require('gulp');

var uglify = require ('gulp-uglify');
var concat = require ('gulp-concat');

//para usar babel
var babel = require ('gulp-babel');
// para usar el minificardor del css
var minifycss = require('gulp-minify-css')
//para usar sass
var sass = require('gulp-sass')

// Minificar JS
// Especificar tarea
// 3 parametros, nombre de la tarea, 
// el segundo si la tarea depende de otra tarea para ejecutarse, 
// una funcion para ejecutarse;
gulp.task('js', function(){
  //primero archivo de entrada, todos los archivos
  //pipe conector
  return gulp.src('src/js/*.js')
  // concat concatena todos los archivos
  .pipe(concat('app.min.js'))
  .pipe(babel({presets: ['env']}))
  // guglify quita todos los entrer espacio y comentarios
  .pipe(uglify())
  //especificar donde va estar nuestro archivo
  .pipe(gulp.dest('dist/js/'))
})

//Minificar css
gulp.task('css',function(){
  return gulp.src(['src/css/*.css', 
  'src/sass/*.scss'])
  .pipe(sass())
  .pipe(concat('main.min.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css/'))
})

//Para ejecutar ambas tareas
// gulp.task('minify-all', ['css', 'js'])

//Para ejecutar por default con solo: gulp
// gulp.task('default', ['css', 'js'])

// Para ver cambios automaticamente cambie
gulp.task('watch', function(){
  gulp.watch(['src/css/*.css', 'src/sass/*.scss'], ['css']);
  gulp.watch('src/js/*.js', ['js']);
})

