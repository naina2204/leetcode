function maxNumberOfFamilies(n, reservedSeats) {
    const map = new Map();
    
    for (const [row, seat] of reservedSeats) {
        if (!map.has(row)) {
            map.set(row, 0);
        }
        map.set(row, map.get(row) | (1 << (seat - 1)));
    }
    
    let total = (n - map.size) * 2;
    
    for (const mask of map.values()) {
        let count = 0;
        const left = (mask & 0b0111100000) === 0; // seats 2,3,4,5
        const right = (mask & 0b0000011110) === 0; // seats 6,7,8,9
        const middle = (mask & 0b0001111000) === 0; // seats 4,5,6,7
        
        if (left) count++;
        if (right) count++;
        if (!left && !right && middle) count++;
        
        total += count;
    }
    
    return total;
}
