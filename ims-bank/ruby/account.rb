class Account < ApplicationRecord
  belongs_to :bank
  belongs_to :customer
end
