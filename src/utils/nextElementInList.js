const nextElementInList = (list, current)=>{
    const currentIndex = list.indexOf(current);
    const nextIndex = (currentIndex + 1) % list.length
    return list[nextIndex]
}


export default nextElementInList;