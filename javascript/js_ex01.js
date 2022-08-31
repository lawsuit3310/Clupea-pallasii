const Boarder = document.querySelector('#photo')
let idx = 01;
gallery = (type) =>
{
    _filename = "image/mov0"
    if(type)
    {
        if (idx >= 8)
        {
            alert("마지막입니다.")
        }
        else idx += 1
    }
    else
    {
        if (idx <= 1)
        {
            alert("처음입니다.")
        }
        else idx -= 1
    }
    Boarder.src = _filename + idx + ".jpg";
}