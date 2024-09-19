import './LoaderStyle.css'

function Loader() {
    return (
        <div class="loader-layout">
            <div class="three-body">
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
                <div class="three-body__dot"></div>
            </div>
            <div class="loading-text">AI 자동생성 중...</div>
        </div>
    )
}

export default Loader;