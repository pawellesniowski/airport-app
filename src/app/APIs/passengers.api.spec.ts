import { TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject } from '@angular/core/testing';
import { PassengerDashboardService } from './passengers.api';


describe('Apii service', () => {
  let service: PassengerDashboardService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PassengerDashboardService,
        MockBackend,
      ]
    });
  })

  beforeEach(() => {
    service = TestBed.get(PassengerDashboardService);
    backend = TestBed.get(MockBackend);
  });

  it('service should  exist', () => {
    expect(service).toBeTruthy();
  });


  it('should return some data',
    inject([HttpTestingController, PassengerDashboardService],
      (httpMock, service) => {
        service.getPassengers().subscribe( (data) => {
          expect(data.title).toEqual('example');
        });

        const req = httpMock.expectOne('http://localhost:3000/passengers');
        req.flush( {title: 'example'});
      });
  })

  it('should send data', () => {
    inject([HttpTestingController, PassengerDashboardService],
      (httpMock, service) => {
        service.updatePassenger().subscribe( (data) => {
          expect(data.title).toEqual('new title');
        });

        const req = httpMock.expectOne('http://localhost:3000/passengers/1');
        req.flush({title: 'new title'});
      });
  })

})
