VolumeOfBox1 = ([4, 2, 4],[3, 3, 3],[1, 1, 2],[2, 1, 1])
VolumeOfBox2 = ([2, 2, 2],[2, 1, 1])
VolumeOfBox3 = ([1, 1, 1])

function tovolume (...box){
    boxs = box.reduce((a,b)=>a+b.reduce((c,d)=>c*d,1),0)
    return boxs
}

console.log (tovolume([4, 2, 4],[3, 3, 3],[1, 1, 2],[2, 1, 1]))
console.log (tovolume(VolumeOfBox2))
console.log (tovolume(VolumeOfBox3))