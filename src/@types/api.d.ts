declare namespace Api {
  export namespace User {
    export namespace Req {
      export interface Login {
        email: string;
        password: string;
      }
      export interface Create {
        firstName: string;
        lastName: string;
        email: string;
        userName: string;
        password: string;
        confirmPassword: string;
      }
    }
    export namespace Res {
      export interface Create {
        id: number;
        userName: string;
      }
    }
  }
  export namespace Operations {
    export namespace Req {
      export interface Event {
        id: number;
        imageUrl?: string;
        time: string;
        date: string;
        title: string;
        subTitle: string;
        shareLink: string;
        attendees: number;
        eventType: string;
        duration: number;
      }
    }
    export namespace Res {}
  }
  export namespace Products {
    export namespace Req {
      export interface Product {
        id: number;
        imageUrl?: string;
        price: string | number;
        title: string;
        description: string;
        shareLink: string;
      }
    }
    export namespace Res {}
  }
}
