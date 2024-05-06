import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    findCustomers() {
        return {
            id: 1,
            name: 'John Doe',
            email: 'test@gmail.com',
        }
    }
}
