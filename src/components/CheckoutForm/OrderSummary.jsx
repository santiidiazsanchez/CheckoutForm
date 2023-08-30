import React from 'react'
import CardItem from '../CardItem'

function OrderSummary() {
    return (
        <>
            <div className='overflow-y-auto overflow-x-hidden' style={{ maxHeight: '29rem' }}>
                <CardItem 
                    code={'KJHAS-2'}
                    img={'https://images.pexels.com/photos/10016080/pexels-photo-10016080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    name={'Photographic Lens'}
                    price={'280.00'}
                />
                <CardItem 
                    code={'POIWE-2'}
                    img={'https://images.pexels.com/photos/821653/pexels-photo-821653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    name={'Camera'}
                    price={'160.00'}
                />
            </div>
        </>
    )
}

export default OrderSummary