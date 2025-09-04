// API service layer for Django backend integration
// This file contains placeholder functions for REST API calls

const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:8000/api'

// Generic API response type
interface ApiResponse<T = any> {
  data: T
  message?: string
  success: boolean
}

// Authentication API
export const authApi = {
  login: async (credentials: { email: string; password: string }): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Login attempt', credentials)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            user: {
              id: 'user-1',
              name: 'Demo User',
              email: credentials.email,
              role: 'patient'
            },
            token: 'demo-jwt-token'
          }
        })
      }, 1000)
    })
  },

  register: async (userData: any): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Registration attempt', userData)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            user: userData,
            token: 'demo-jwt-token'
          }
        })
      }, 1000)
    })
  },

  logout: async (): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Logout')
    return Promise.resolve({ success: true, data: null })
  }
}

// Therapy Sessions API
export const sessionsApi = {
  getSchedule: async (userId: string): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Fetching schedule for user', userId)
    return Promise.resolve({
      success: true,
      data: {
        sessions: [
          {
            id: '1',
            type: 'Abhyanga Massage',
            date: '2024-12-30T10:00:00Z',
            practitioner: 'Dr. Rajesh Kumar',
            status: 'confirmed'
          }
        ]
      }
    })
  },

  bookSession: async (sessionData: any): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Booking session', sessionData)
    return Promise.resolve({ success: true, data: sessionData })
  },

  cancelSession: async (sessionId: string): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Cancelling session', sessionId)
    return Promise.resolve({ success: true, data: null })
  }
}

// Progress Tracking API
export const progressApi = {
  getProgress: async (userId: string): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Fetching progress for user', userId)
    return Promise.resolve({
      success: true,
      data: {
        overallProgress: 68,
        milestones: [
          { name: 'Phase 1: Preparation', completed: true },
          { name: 'Phase 2: Detoxification', completed: false, progress: 68 },
          { name: 'Phase 3: Rejuvenation', completed: false }
        ]
      }
    })
  },

  updateProgress: async (progressData: any): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Updating progress', progressData)
    return Promise.resolve({ success: true, data: progressData })
  }
}

// Notifications API
export const notificationsApi = {
  getNotifications: async (userId: string): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Fetching notifications for user', userId)
    return Promise.resolve({
      success: true,
      data: {
        notifications: [
          {
            id: '1',
            type: 'session_reminder',
            title: 'Session Reminder',
            message: 'Your abhyanga massage is scheduled for tomorrow at 10:00 AM',
            read: false,
            createdAt: '2024-12-29T09:00:00Z'
          }
        ]
      }
    })
  },

  sendSMS: async (phoneNumber: string, message: string): Promise<ApiResponse> => {
    // TODO: Replace with actual SMS API integration
    console.log('API: Sending SMS', { phoneNumber, message })
    return Promise.resolve({ success: true, data: null })
  },

  sendEmail: async (email: string, subject: string, body: string): Promise<ApiResponse> => {
    // TODO: Replace with actual email API integration
    console.log('API: Sending email', { email, subject, body })
    return Promise.resolve({ success: true, data: null })
  }
}

// Feedback API
export const feedbackApi = {
  submitFeedback: async (feedbackData: any): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Submitting feedback', feedbackData)
    return Promise.resolve({ success: true, data: feedbackData })
  },

  getFeedback: async (userId: string): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Fetching feedback for user', userId)
    return Promise.resolve({
      success: true,
      data: {
        feedback: [
          {
            id: '1',
            sessionId: '1',
            rating: 8,
            comment: 'Great session, felt very relaxed afterwards.',
            createdAt: '2024-12-28T15:00:00Z'
          }
        ]
      }
    })
  }
}

// Patients API (for practitioners)
export const patientsApi = {
  getPatients: async (practitionerId: string): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Fetching patients for practitioner', practitionerId)
    return Promise.resolve({
      success: true,
      data: {
        patients: [
          {
            id: 'patient-1',
            name: 'Priya Sharma',
            email: 'priya@example.com',
            currentProgram: 'Panchakarma',
            progress: 68,
            nextSession: '2024-12-30T10:00:00Z'
          }
        ]
      }
    })
  },

  updatePatientProgress: async (patientId: string, progressData: any): Promise<ApiResponse> => {
    // TODO: Replace with actual API call
    console.log('API: Updating patient progress', { patientId, progressData })
    return Promise.resolve({ success: true, data: progressData })
  }
}