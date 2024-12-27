import React from 'react'
import Button from 'react-bootstrap/button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
    return (
<div className="card" style="width: 18rem;">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fnARttJu-0p5E63WFz9KuwHaE8%26pid%3DApi&f=1&ipt=2c64986d5f44774194188cc1873bdc740f4c6a4a8a096a951bc7ba2ab1d5d4fc&ipo=images" class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">samsung galaxy a55</h5>
        <p class="card-text">The Samsung Galaxy A55 5G brings a premium design, a few quality-of-life upgrades, and familiar Samsung strengths. But long-standing camera complaints, bloatware, and mostly incremental performance upgrades drag the package down.</p>
        <a href="#" class="btn btn-primary">Buy it</a>
    </div>
</div>
    )
}