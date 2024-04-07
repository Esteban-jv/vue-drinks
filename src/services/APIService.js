import api from "@/lib/axios";

export default {
    getCategories() {
        return api('/list.php?c=list')
    },
    searchRecepies({category, name}) {
        return api(`/filter.php?c=${category}&i=${name}`)
    },
    getRecepy(id) {
        return api(`/lookup.php?i=${id}`)
    }
}