## Mounting
constructor()
render()
componentDidMount () {//Chi thuc hien 1 lan}

## Updating
render() // -> New props / setState() / forceUpdate()
componentDidUpdate() // han che dung. Vi vong lap vo tan. Do co ham setState(),... ...

## Unmounting
componentWillUnmounting() {//Chi thuc hien 1 lan}


- Nen dung PureComponent. Vi co ham shouldComponentUpdate() -> So sanh gia tri trc va sau.


#### constructor()
- duoc phep dung.
- Dung super(props)
- Khai bao stage

#### componentDidMount()
- Goi API, bien doi du lieu, cap nhat state
- Gui tracking page view (GA, facebookPixel, ...)

#### componentWillUnmount()
- Clear timeout hoac interval
- reset du lieu Redux

#### componentDidUpdate()
-> Loi lap vo tan.
- Khi query param hien tai thay doi component hien tai.