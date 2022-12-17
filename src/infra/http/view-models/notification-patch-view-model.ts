export class NotificationPatchViewModel {
  static toHTTP(resource: string, notificationId: string) {
    return {
      notificationId,
      message: `Notification successfully ${resource}!`,
    };
  }
}
