import { htmlValidator } from "gulp-w3c-html-validator";
import bemValidator from 'gulp-html-bem-validator';
import access from 'gulp-wcag-accessibility';

export const validator = () => {
    return app.gulp.src(`${app.path.build.html}**/*.min.html`)
        .pipe(bemValidator())
        .pipe(htmlValidator.analyzer())
        .pipe(htmlValidator.reporter())
        .pipe(access({
            accessibilityLevel: 'WCAG2AAA',
            maxBuffer: '1024*1024',
            force: true,
            verbose: false,
            reportLevels: {
                notice: false,
                warning: true,
                error: true
            }
        }))
}