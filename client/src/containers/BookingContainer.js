import React, {Component} from 'react';
import NewBookingForm from '../components/NewBookingForm';

// import '../../public/style/style';

class BookingContainer extends Component {

    constructor(props) {
        super(props);
        this.state={
            data: []
        }
        this.handleBookingSubmit = this.handleBookingSubmit.bind(this);
    }

    handleBookingSubmit(formDetail) {
        fetch("http://localhost:8080/customers", {
            method: "POST",
            headers: {
                "Accept": "application/json", 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDetail), 
        })
        .then(res => res.json())
        .then(customer => {
            fetch("http://localhost:8080/bookings", {
                method: "POST",
                headers: {
                    "Accept": "application/json", 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    customer: `http://localhost:8080/customers/${customer.id}`,
                    mesa: `http://localhost:8080/mesas/${formDetail.selectedTableId}`,
                    date: formDetail.date,
                    startTime: formDetail.startTime,
                    endTime: formDetail.endTime,
                    numOfGuests: formDetail.numOfGuests
                }) 
            })
            .then(res => res.json())
            .then(booking => this.props.onNewBookingAdded(booking))
        })
    }

    render() {
        return(
            <div className="booking-cont">
                <NewBookingForm onBookingSubmit={this.handleBookingSubmit}/>
            </div>
        )
    }
}

export default BookingContainer;