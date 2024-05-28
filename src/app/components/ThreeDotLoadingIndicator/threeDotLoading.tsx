import { Wrapper } from './style'

export const ThreeDotLoadingIndicator = (props: any) => {
  return (
    <Wrapper {...props}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  )
}
