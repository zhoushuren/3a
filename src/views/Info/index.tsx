import styled from "styled-components";
import { PoolUpdater, ProtocolUpdater, TokenUpdater } from 'state/info/updaters'
import InfoNav from './components/InfoNav'
const TopBar = styled.div`
  height:70px;
  background:white;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  .topBar-item{
    border-bottom:4px solid transparent;
    padding-bottom:8px;
    cursor:pointer;
  }
  .active{
    color:#0FA68D;
    border-bottom:4px solid #0FA68D;
  }
`

const Btn = styled.div`
width:250px;
height:48px;
line-height:48px;
color:white;
font-size:16px;
text-align:center;
background: #0FA68D;
box-shadow: 0px 4px 0px #077966;
border-radius:28px;
`

const Card = styled.div`
  border-radius: 30px;
  margin: 0 auto;
  background:#f6f7f9;
  width:340px;
  img{
    width: 340px;
    height: 120px;
  }
  .card-inner{
    padding:12px;
    .card-inner-header{
      color: #0FA68D;
      font-size: 16px;
      line-height:24px;
    }
    .gray{
      color:#999999;
    }
    .dark{
      color: #222222;
    }
    .orange{
      color: #FF3D00;
    }
    .card-text-line{
      font-size: 14px;
      display:flex;
      line-height:22px;
      justify-content:space-between;
    }
    .card-text-line.with-border{
      // border-bottom: 1px solid #F2F2F2;
      height:74px;
      line-height:74px;
    }
    .card-inner-number-box{
      display:flex;
      .card-inner-number{
        color: #222222;
        font-weight: 700;
        font-size: 18px;
      }
      .card-inner-suffix{
        color:#999999;
        font-size: 14px;
      }
    }
  }
`

export const InfoPageLayout = ({ children }) => {
  return (
    <>
      <ProtocolUpdater />
      <PoolUpdater />
      <TokenUpdater />
      <InfoNav />
      {children}
      <TopBar className="topBar">
        <div className="active topBar-item" style={{marginRight:"122px"}}>Latest</div>
        <div className="topBar-item">Finished</div>
      </TopBar>
      <div style={{width:'366px',margin:'0 auto',marginTop:'30px'}}>
        <h1 style={{color:'#0FA68D',fontSize:'36px'}}>
          IDO: Initial Digital Assects Offering
        </h1>
        <h6 style={{color:'#999999'}}>Buy new tokens launching on APPLE</h6>
        <Btn style={{width:'100%',marginBottom:'20px',marginTop:'20px'}}>How does it works?</Btn>
      </div>
      <Card>
         <img src="" alt="" />
          <div className="card-inner">
            <div className="card-inner-header">Name of IDO xxx</div>
            <div style={{lineHeight:'24px'}}>
              <span className="dark">2400000.000000</span>
              <span className="gray">APPLE</span>
            </div>
            <div style={{lineHeight:'24px'}}>
              <span className="gray">Distance starts</span>
              <span className="orange">12d 23h:27m:36s</span>
            </div>
            <div style={{borderBottom:'1px solid #14BEA2'}} />
            <div className="card-text-line">
              <div className="gray">Input amount</div>
              <div className="dark">200 Apple</div>
            </div>
            <div className="card-text-line">
              <div className="gray">Total committed</div>
              <div className="dark">402095 Apple(1508.38%)</div>
            </div>
            <div className="card-text-line">
              <div className="gray">Funds to raise</div>
              <div className="dark">25,000 Apple</div>
            </div>
            <div className="card-text-line">
              <div className="gray">Price per LFG</div>
              <div className="dark">$0.001</div>
            </div>
            <Btn style={{width:'100%',marginTop:'20px'}}>Check</Btn>
          </div>
      </Card>
  
      <div style={{width:'366px',margin:'0 auto',marginTop:'30px'}}>
        <h1 style={{color:'#0FA68D',fontSize:'36px'}}>
          How to take part in the IDO
        </h1>
        <Card style={{marginTop:'30px'}}>
          <div className="card-inner">
            <div className="card-text-line">
              <div className="gray">1.Follow social media and link to your CORE wallet.</div>
            </div>
            <div className="card-text-line">
              <div className="gray">2.You have sufficient CORE tokens in your wallet</div>
            </div>
            <div className="card-text-line">
              <div className="gray">3.You need to be white listed</div>
            </div>
            <div className="card-text-line">
              <div className="gray">4.IDO will be fully released according to the super fundraising model, and the overflowed tokens will be returned to the original way after the end of IDO</div>
            </div>
          </div>
      </Card>
      </div>

      <div style={{width:'366px',margin:'0 auto',marginTop:'30px'}}>
        <h1 style={{color:'#0FA68D',fontSize:'36px'}}>
          Details
        </h1>
        <Card style={{marginTop:'30px'}}>
          <div className="card-inner">
            <div className="card-text-line with-border">
              <div className="dark">How to participate in IDO?</div>
              <span style={{color:'#0FA68D'}}>Details</span>
            </div>
            <div className="card-text-line with-border">
              <div className="dark">How to participate in IDO?</div>
              <span style={{color:'#0FA68D'}}>Details</span>
            </div>
            <div className="card-text-line with-border">
              <div className="dark">How to participate in IDO?</div>
              <span style={{color:'#0FA68D'}}>Details</span>
            </div>
            <div className="card-text-line with-border">
              <div className="dark">How to participate in IDO?</div>
              <span style={{color:'#0FA68D'}}>Details</span>
            </div>
          </div>
      </Card>
      </div>
    </>
  )
}
