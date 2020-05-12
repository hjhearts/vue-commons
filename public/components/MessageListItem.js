export default {
    name: 'MessageListItem',
    template: `<ul><li>{{ item.text }} - {{ item.createdAt | datetime}}
        <button @click="deleteClicked">X</button></li></ul>`,
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteClicked () {
            this.$emit('delete')
        }
    }
}