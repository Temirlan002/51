import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";


export const useTodos = create(devtools(persist((set) => ({
    items: [],
    filter: 'all', // all | active | done
    search: '',

    add: (title) => set(d => { d.items.push({ id: crypto.randomUUID(), title: title.trim(), done: false })}, false, 'todos/add'),
    remove: (id) => set(d => { d.items = d.items.filter(t => t.id !== id)}, false, 'todos/remove'),
    toggle: (id) => set(d => { const t = d.items.find(x => x.id === id); if(t) t.done = !t.done}, false, 'todos/toggle'),

    setFilter: (f) => set({filter: f}, false, 'todos/setFilter'),
    setSearch: (q) => set({ search: q }, false, 'todos/setSearch')
})), { name: 'todos-v1'})) 