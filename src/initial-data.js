const initialData = {
    numbers: {
        'five': { id: 'five', content: '5' },
        'four': { id: 'four', content: '4' },
        'one': { id: 'one', content: '1' },
        'three': { id: 'three', content: '3' },
        'two': { id: 'two', content: '2' },
    },
    column: {
            title: 'Order the Numbers',
            content: 'Drag the blocks to reorder them from lowest to highest!',
            id: 'column-1',
            numberIds: ['four', 'one', 'five', 'three', 'two'],
        
    },
    columnOrder: ['column-1'],
};

export default initialData;