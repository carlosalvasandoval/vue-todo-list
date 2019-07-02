const app = new Vue({
    el: '#app',
    data: {
        titulo: 'hola mundo con view',
        cursos: [
            { titulo: 'php', horas: 10 },
            { titulo: 'java', horas: 15 }
        ],
        cursoModel: '',
        total: 0
    },
    methods: {
        addCurso() {
            this.cursos.push({
                titulo: this.cursoModel, horas: 0
            });
            this.cursoModel = '';
        }
    },
    computed: {
        totalHoras() {
            this.total = 0;
            for (curso of this.cursos) {
                this.total += curso.horas; 
            }
            return this.total;
        }
    },
});