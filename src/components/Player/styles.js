import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282828;
  padding: 12px;
`

export const Current = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 13px;
    color: #fff;
  }

  small {
    font-size: 11px;
    color: #b3b3b3;
    margin-top: 5px;
  }
`

export const Volume = styled.div`
  diplay: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }
`
