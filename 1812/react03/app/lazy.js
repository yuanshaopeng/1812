class LazyImg extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <img _src={this.props.url} ref="lazyImg" />
    }
    componentDidMount(){
		const that = this;
	
		if(this.props.isLazy){
            let toTop = this.refs.lazyImg.offsetTop;
            let srcollCallBack = ()=>{
				let h = document.documentElement.scrollTop+window.innerHeight;
				if(h>=toTop){
					this.refs.lazyImg.setAttribute("src",this.refs.lazyImg.getAttribute("_src"));
					this.refs.lazyImg.onload = function(){
						if(that.props.handleload){
							that.props.handleload(this);
						}
					}
					this.refs.lazyImg.onerror = function(){
						if(that.props.handleError){
							that.props.handleError();
						}
                    }
                    window.removeEventListener("scroll",srcollCallBack);
				}
			}
			window.addEventListener("scroll",srcollCallBack)
		}else{
			this.refs.lazyImg.setAttribute("src",this.refs.lazyImg.getAttribute("_src"));
		}
        
    }
}