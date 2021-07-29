import { Injectable } from '@angular/core'
import { ServerService } from '../http-server/server.service'

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor (private serverService: ServerService) {}

  getRestaurantStatus (restaurantId: number) {
    return this.serverService
      .get(`booking/restaurant-status/${restaurantId}`)
      .then((data) => data.data || null)
  }

  updateStatus (params) {
    return this.serverService
      .put('booking/update-restaurant-status', params)
      .then((data) => data.data || null)
  }

  getRestaurantDay (date: Date, restaurantId: number, hideUsers: boolean) {
    return this.serverService
      .post('booking/get-restaurant-booking-date', {
        date,
        restaurantId,
        hideUsers: hideUsers ? 1 : 0,
      })
      .then((data) => data.data || [])
  }

  getRestaurantPreview (restaurantId: number) {
    return this.serverService
      .get(`booking/restaurant-preview/${restaurantId}`)
      .then((data) => data.data || null)
  }

  makeReservationDate (restaurantId: number, date: Date, nbPerson: number) {
    const now = new Date()
    const d = new Date(date)
    if(d.getTime() < now.getTime()) {
      alert('Vous ne pouvez pas modifier une réservation déjà passée !')
      return Promise.reject('Vous ne pouvez pas modifier une réservation déjà passée !')
    }

    return this.serverService
      .post('booking/make-reservation-date', { restaurantId, date, nbPerson })
      .then((data) => data.data || null)
  }

  removeReservationDate (restaurantId: number, date: Date) {
    const now = new Date()
    const d = new Date(date)
    if(d.getTime() < now.getTime()) {
      alert('Vous ne pouvez pas supprimer une réservation déjà passée !')
      return Promise.reject('Vous ne pouvez pas supprimer une réservation déjà passée !')
    }

    return this.serverService
      .post('booking/remove-reservation-date', { restaurantId, date })
      .then((data) => data.data || null)
  }

  getRestaurantUser (restaurantId: number) {
    return this.serverService
      .get(`booking/user-restaurant-status/${restaurantId}`)
      .then((data) => data.data || [])
  }

  getMyBookings () {
    return this.serverService
      .get('booking/get-my-bookings')
      .then((data) => data.data || [])
  }

  getBookingDetails (bookingId: number) {
    return this.serverService
      .get(`booking/get-details/${bookingId}`)
      .then((data) => data.data || null)
      .then(data => {
        if(data) {
          data.date_reservation = new Date(data.date_reservation)
        }

        return data
      })
  }

  updateRestaurantBookingStatus (params) {
    return this.serverService
      .post('booking/update-restaurant-booking-status', params)
      .then((data) => data.data || null)
  }

  getAll () {
    return this.serverService.get('booking/get-all').then((data) => data.data || [])
  }

  getBookingFullDetails (bookingId: number) {
    return this.serverService
      .get(`booking/get-full-details/${bookingId}`)
      .then((data) => data.data || null)
  }

  adminUpdateBookingStatus (params) {
    return this.serverService.put('booking/admin-update-status', params).then((data) => data.data || null)
  }

  getAllDone () {
    return this.serverService.get('booking/get-all-done').then((data) => data.data || [])
  }

  updateIsPayStatus (bookingId: number, status: number) {
    return this.serverService.put('booking/update-is-pay-status', {
      bookingId,
      status,
    })
  }
}
