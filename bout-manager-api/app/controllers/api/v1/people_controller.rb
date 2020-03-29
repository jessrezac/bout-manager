class Api::V1::PeopleController < ApplicationController
    before_action :doorkeeper_authorize!

    def show
        person = Person.find(params[:id])
        render json: person
    end
    
    def update
        person = Person.find(params[:id])
        person.update(people_params)
        render json: person
    end

    private

    def people_params
        params.require(:api_v1_person).permit(:first_name, :last_name, :email, :phone, :instagram, :snapchat)

    end

end